import { Tag } from "antd";
import { AntdEntity } from "../../../packages/core/datamodel/decorators/dist";
import { render, title } from "@bewise/jpf-decorators/src";

@AntdEntity()
export class Post {
  id: number | undefined;

  @title("Title test")
  title: string = "";

  @render(Tag)
  status: string = "";

  createdAt: Date | undefined;
}
