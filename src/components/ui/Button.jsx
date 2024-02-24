export default function Button({ class_name, text, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`bg-[#00AEF7] text-white no-underline cursor-pointer rounded-[15px] py-[15px] px-12 ${class_name}`}
    >
      {text}
    </a>
  );
}
