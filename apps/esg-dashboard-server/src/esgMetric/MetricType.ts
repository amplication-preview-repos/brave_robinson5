import { registerEnumType } from "@nestjs/graphql";

export enum MetricType {
    PieChart = "PieChart",
    LineGraph = "LineGraph"
}

registerEnumType(MetricType, {
    name: "MetricType",
  });