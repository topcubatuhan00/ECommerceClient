import { Injectable } from '@angular/core';

declare var alertify: any;

@Injectable({
	providedIn: 'root'
})
export class AlertifyService {

	constructor() { }

	message(message: string, messageType: MessageType, position: Position = Position.BottomLeft, delayTime: DelayTime = 3) {
		alertify.set("notifier", "position", position)
		alertify.set("notifier", "delay", delayTime)
		alertify[messageType](message)
	}

	dismiss(){
		alertify.dismissAll()
	}
}


export enum MessageType {
	Error = "error",
	Message = "message",
	Notify = "notify",
	Success = "success",
	Warning = "warning"
}

export enum Position {
	TopCenter = "top-center",
	BottomCenter = "bottom-center",
	BottomLeft = "bottom-left",
	BottomRight = "bottom-right",
	TopLeft = "top-left",
	TopRight = "top-right"
}

export enum DelayTime{
	LongDelay = 5,
	ShortDelay = 3
}