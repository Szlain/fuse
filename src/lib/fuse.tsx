import './fuse.module.css';

/* eslint-disable-next-line */
export interface FuseReactProps {}

export function Button(props: FuseReactProps) {
  return (
    <button>Button!</button>
  );
}
export function JsxButton(props: FuseReactProps) {
  return (
    <button>Welcome to FuseReact!</button>
  );
}
export function DummyElem(props: FuseReactProps) {
  return (
    <button>Dummy Elem that should be treeshaken!</button>
  );
}


