import { siAndroid, siApple, siAppstore, siFlutter, siGoogleplay, siKotlin, siReact, siSwift } from "simple-icons";

/**
 * Logos of the platforms and technologies named in our services (iOS, Android, Flutter,
 * React Native, Swift, Kotlin, store publishing). Shown to indicate the technology we
 * build with, not a partnership or endorsement. Logos are trademarks of their owners.
 */
const techs = [
  { icon: siApple, label: "iOS" },
  { icon: siAndroid, label: "Android" },
  { icon: siFlutter, label: "Flutter" },
  { icon: siReact, label: "React Native" },
  { icon: siSwift, label: "Swift" },
  { icon: siKotlin, label: "Kotlin" },
  { icon: siAppstore, label: "App Store" },
  { icon: siGoogleplay, label: "Google Play" },
];

export function TechSlider() {
  const row = [...techs, ...techs];
  return (
    <div className="marquee overflow-hidden">
      <ul className="marquee-track gap-5 py-2 [animation-duration:32s]">
        {row.map(({ icon, label }, i) => (
          <li
            key={i}
            aria-hidden={i >= techs.length}
            className="group flex h-20 shrink-0 items-center gap-3 rounded-[var(--radius-lg)] border border-line bg-white px-7 transition-[border-color,box-shadow] hover:border-mint-ink/30 hover:shadow-[var(--shadow-card)]"
          >
            <svg role="img" viewBox="0 0 24 24" className="size-8 grayscale transition duration-300 group-hover:grayscale-0" fill={`#${icon.hex}`}>
              <title>{label}</title>
              <path d={icon.path} />
            </svg>
            <span className="whitespace-nowrap font-display text-base font-semibold text-forest-900/70 transition-colors group-hover:text-forest-900">{label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
