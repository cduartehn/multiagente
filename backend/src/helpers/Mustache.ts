import Mustache from "mustache";
import Ticket from "../models/Ticket";

export const msgsd = (): string => {
  
  let ms = "";

  const hh = new Date().getHours();

  if (hh >= 6){ms = "Bom dia";}
  if (hh > 11){ms = "Boa tarde";}
  if (hh > 17){ms = "Boa noite";}
  if (hh > 23 || hh < 6){ms = "Boa madrugada";}

  return ms;
};

export const control = (): string => {
  const Hr = new Date();

  const dd: string = ("0" + Hr.getDate()).slice(-2);
  const mm: string = ("0" + (Hr.getMonth() + 1)).slice(-2);
  const yy: string = Hr.getFullYear().toString();

  const ctrl = yy + mm + dd + "T";
  return ctrl;
};

export const hour = (): string => {
  const Hr = new Date();

  const hh: number = Hr.getHours();
  const min: string = ("0" + Hr.getMinutes()).slice(-2);
  const ss: string = ("0" + Hr.getSeconds()).slice(-2);

  const hours = hh + ":" + min + ":" + ss;
  return hours;
};

export default (body: string, ticket?: Ticket): string => {
  const view = {
    name: ticket ? ticket.contact.name : "",
    ticket_id: ticket ? ticket.id : "",
    ms: msgsd(),
    protocol: control(),
    hour: hour(),
  };

  return Mustache.render(body, view);
};