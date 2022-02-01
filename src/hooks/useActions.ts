import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import UseActions from "../store/actions-creators/index";

export const useActionsDispatch = () => {
    const dispatch = useDispatch()
    return bindActionCreators(UseActions, dispatch)
}