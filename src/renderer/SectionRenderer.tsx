import type { SectionConfig } from "@/src/schema/app-config";
import {
  getComponentDefinition,
  isRegisteredComponent,
  runtimeRegistry,
} from "@/src/registry/component-registry";

import { InvalidSection, MissingSection } from "@/src/renderer/SectionFallbacks";

type SectionRendererProps = {
  section: SectionConfig;
};

export function SectionRenderer({ section }: SectionRendererProps) {
  if (!isRegisteredComponent(section.type)) {
    if (__DEV__) {
      return <MissingSection type={section.type} />;
    }
    return null;
  }

  const definition = getComponentDefinition(section.type);
  const Component = runtimeRegistry[section.type];
  const parsed = definition.propsSchema.safeParse(section.props ?? {});

  if (!parsed.success) {
    if (__DEV__) {
      return <InvalidSection type={section.type} />;
    }
    return null;
  }

  return <Component {...parsed.data} sectionId={section.id} />;
}
