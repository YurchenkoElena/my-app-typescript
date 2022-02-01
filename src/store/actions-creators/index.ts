import * as UserActionsCreator from "./user"
import * as TodoActionsCreator from "./todo"
import * as CardActionsCreator from "./cards"

export default {
    ...UserActionsCreator,
    ...TodoActionsCreator,
    ...CardActionsCreator
}
