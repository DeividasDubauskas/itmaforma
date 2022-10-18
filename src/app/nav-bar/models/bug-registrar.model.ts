import { ContactModel } from "src/app/contact-information/models/contact.model";
import { WishModel } from "src/app/wishes/models/wish.model";

export interface BugRegistrar{
   contacts: ContactModel[];
   wishes: WishModel[];
   comment: string;
}
