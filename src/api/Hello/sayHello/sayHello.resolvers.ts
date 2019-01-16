import { Gretting } from "../../../types/graph";

const resolvers = {
    Query: {
        sayHello: (): Gretting => {
            return {
                error: false,
                text: "love you"
            }
        }
    }
};

export default resolvers;