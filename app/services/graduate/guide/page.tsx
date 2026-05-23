import type { Metadata } from "next";
import { GraduateGuideContent } from "@/components/graduate/GraduateGuideContent";

export const metadata: Metadata = {
  title: "日本大学院申请全流程指南",
  description:
    "详解四条申请路径（语言学校/研究生/直考/SGU）、研究计划书写作方法、教授套词策略与邮件模板、完整申请时间线。",
};

export default function GraduateGuidePage() {
  return <GraduateGuideContent />;
}