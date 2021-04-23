import { getCustomRepository, Repository } from "typeorm"
import { Message } from "../entities/Message";
import { MessageRepository } from "../repositories/MessagesRepository"

interface IMessagesCreate {
    text: string;
    admin_id?: string;
    user_id: string;
}

class MessagesService {
    private messagesRepository: Repository<Message>;

    constructor() {
        this.messagesRepository = getCustomRepository(MessageRepository);
    }

    async create( { text, admin_id, user_id } : IMessagesCreate ) {

        const message = this.messagesRepository.create({
            text,
            admin_id,
            user_id
        });

        await this.messagesRepository.create(message);

        return message;
    }

    async listByUser(user_id: string) {

        const list = await this.messagesRepository.find({
            where: { user_id },
            relations: ["user"]
        });

        return list;
    }
}


export { MessagesService }