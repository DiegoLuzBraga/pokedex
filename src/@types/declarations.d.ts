declare module "*.scss" {
  const content: { [className: string]: string };
  export default content;
}

declare module "*.png" {
  const filePath: string;
  export = filePath;
}

declare namespace jest {
  interface Matchers<R> {
    toHaveTextContent: (htmlElement: string) => object;
    toBeInTheDOM: () => void;
  }

  interface Expect {
    toHaveTextContent: (htmlElement: string) => object;
    toBeInTheDOM: () => void;
  }
}
