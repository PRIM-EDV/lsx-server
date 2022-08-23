import * as WebSocket from 'ws';
import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { LsxMessage } from 'proto/lsx';
import { LsxGateway } from 'src/gateway/lsx.gateway';
import { LoggingService } from 'src/logging/logging.service';
import { AnnouncementsService } from './announcements.service';

interface Ws extends WebSocket {
  id: string;
}

@WebSocketGateway()
export class AnnouncementsGateway extends LsxGateway{

  constructor(
    log: LoggingService,
    private readonly annoucementsService: AnnouncementsService
  ) {
    super(log);
  }

  @SubscribeMessage('msg')
  handleMessage(client: Ws, payload: string): void {
    const msg = LsxMessage.fromJSON(JSON.parse(payload))

    if(msg.request) {
      if(msg.request.getAnnouncementFiles){
        this.annoucementsService.getAnnoucementFiles().then((files) => {
          this.respond(client, msg.id, {getAnnouncementFiles: {files: files}})
        })
      }
    }
  }
}
