declare module '*.jpg' {
  const value: string
  export default value
};
declare module '*.png'{
  const value: string
  export default value
};


declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}