import crypto from "crypto";
import Protoype from "./Prototype";

export default class Field implements Protoype {

    constructor(readonly fieldId: string, readonly type: string, readonly title: string) {
    }

    static create(type: string, title: string) {
        const fieldId = crypto.randomUUID();
        return new Field(fieldId, type, title);
    }

    clone(): Field {
        return new Field(this.fieldId, this.type, this.title);
    }
}
