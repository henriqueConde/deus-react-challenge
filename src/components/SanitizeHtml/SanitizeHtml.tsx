/* eslint-disable react/no-danger */
import DOMPurify from 'dompurify';

type SanitizeHtmlProps = {
  content: string;
};

const SanitizeHtml = ({ content }: SanitizeHtmlProps) => (
  <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }} />
);

export default SanitizeHtml;
