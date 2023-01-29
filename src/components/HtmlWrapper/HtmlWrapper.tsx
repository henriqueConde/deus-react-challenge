/* eslint-disable react/no-danger */
import DOMPurify from 'dompurify';

type HtmlWrapperProps = {
  content: string;
};

const HtmlWrapper = ({ content }: HtmlWrapperProps) => (
  <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }} />
);

export default HtmlWrapper;
