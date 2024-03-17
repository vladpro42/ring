import { useDispatch, useSelector, useStore } from "react-redux"
import { AppDispatch, RootState } from "../../redux/rootReducer"
import { AppStore } from "../../redux/store"

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppStore = useStore.withTypes<AppStore>() 