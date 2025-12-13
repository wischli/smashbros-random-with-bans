import { HelpItem, HelpContext } from './types';
import {
  annotationCardStyle,
  annotationTitleStyle,
  annotationIconStyle,
  annotationDescStyle,
  conditionalHintStyle,
} from './HelpOverlay-style';

interface HelpAnnotationProps {
  item: HelpItem;
  context: HelpContext;
}

const HelpAnnotation = ({ item, context }: HelpAnnotationProps) => {
  const activeConditions = item.conditionalContent?.filter(
    (cc) => cc.condition(context)
  ) || [];

  return (
    <div style={annotationCardStyle} className="help-annotation">
      <div style={annotationTitleStyle}>
        <span style={annotationIconStyle}>{item.icon}</span>
        <span>{item.title}</span>
      </div>
      <p style={annotationDescStyle}>{item.description}</p>
      {activeConditions.map((cc, idx) => (
        <div key={idx} style={conditionalHintStyle(cc.isWarning ?? false)}>
          {cc.content}
        </div>
      ))}
    </div>
  );
};

export default HelpAnnotation;
