import { title } from "@bewise/jpf-decorators";
import { AntdEntity } from "@bewise/jpf-decorators";
import { Tag } from "antd";
import { render } from "@bewise/jpf-decorators";

@AntdEntity()
export class Post {
  id: number | undefined;

  @title("Title test")
  title: string = "";

  @render(Tag)
  status: string = "";

  createdAt: Date | undefined;
}
