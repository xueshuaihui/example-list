// 导入 Redux Toolkit 提供的 configureStore 函数
import { configureStore } from '@reduxjs/toolkit'; 
// 导入自定义的 countReducer
import countReducer from './modules/countStore'; 

// 使用 configureStore 创建 Redux 存储实例
const store = configureStore({
  // reducer 键值对，指定存储中的 reducer。
  reducer: {
    // 在存储中使用名为 countStore 的键关联 countReducer
    countStore: countReducer,
  },
});

// 导出 configureStore 创建的 Redux 存储实例，以便在应用程序中使用
export default store;
