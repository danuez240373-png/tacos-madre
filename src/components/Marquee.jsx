const WORDS = [
  'Tacos',
  'Burritos',
  'Tortas',
  'Quesadillas',
  'Mulitas',
  'Gorditas',
  'Chilaquiles',
  'Asada Fries',
  'Desayunos',
];

export default function Marquee() {
  const group = (
    <div className="marquee__group" aria-hidden="true">
      {WORDS.map((word) => (
        <span className="marquee__item" key={word}>
          {word}
        </span>
      ))}
    </div>
  );

  return (
    <div className="marquee">
      {/* Two identical groups so the loop is seamless. Screen readers get the
          list once, in plain text. */}
      <p className="visually-hidden">
        On the menu: {WORDS.join(', ')}.
      </p>
      <div className="marquee__track">
        {group}
        {group}
      </div>
    </div>
  );
}
