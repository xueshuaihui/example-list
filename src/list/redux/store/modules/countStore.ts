// 从 reduxjs/toolkit 库中导入 createSlice 函数
import { createSlice } from '@reduxjs/toolkit';

// 使用 createSlice 创建一个名为 count 的切片
const countStore = createSlice({
  // 切片的名称，用于在 Redux DevTools 中识别此切片
  name: 'count',
  // 初始状态，默认为 count: 0
  initialState: {
    count: 10
  },
  reducers: {
    // 定义 increment reducer，用于增加 count 状态值
    increment(state) {
      state.count++;
    },
    // 定义 decrement reducer，用于减少 count 状态值
    decrement(state) {
      state.count--;
    }
  }
});

// 导出 actions，供组件分发
export const { increment, decrement } = countStore.actions;
// 导出默认的 reducer，用于更新 state
export default countStore.reducer;
