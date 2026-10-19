import { learnColors } from "@/components/learn/illustrations/palette";

export function ChemicalSynapse({ label }: { label: string }) {
  return (
    <svg viewBox="0 0 960 420" className="h-full w-full" role="img" aria-label={label}>
      <rect width="960" height="420" fill="#fbfaf7" />
      <path
        d="M250 210C250 150 330 120 390 150C430 170 450 210 450 210L450 250C450 250 430 300 380 310C320 324 250 290 250 250Z"
        fill={learnColors.soma}
        stroke={learnColors.ink}
        strokeWidth="1.6"
      />
      <path d="M470 150V310" stroke={learnColors.ink} strokeWidth="3" />
      <path d="M560 150V310" stroke={learnColors.ink} strokeWidth="3" />
      <path
        d="M560 150C620 130 760 140 790 210C812 262 760 320 680 310C610 302 560 270 560 250Z"
        fill={learnColors.membrane}
        stroke={learnColors.ink}
        strokeWidth="1.6"
      />
      <g aria-hidden="true">
        <circle cx="360" cy="190" r="16" fill="#f7f1ea" stroke={learnColors.transmitter} />
        <circle cx="400" cy="230" r="16" fill="#f7f1ea" stroke={learnColors.transmitter} />
        <circle
          cx="392"
          cy="268"
          r="16"
          fill="#f7f1ea"
          stroke={learnColors.transmitter}
          style={{
            transform: "translateX(calc(var(--release, 0) * 28px))",
          }}
        />
        <circle
          r="8"
          fill={learnColors.calcium}
          style={{
            transform:
              "translate(430px, calc(70px + var(--calcium, 0) * 120px))",
          }}
        />
        <text x="444" y="78" fill={learnColors.ink} fontSize="16">
          Ca2+
        </text>
        {[0, 1, 2].map((item) => (
          <circle
            key={item}
            r="7"
            fill={learnColors.transmitter}
            style={{
              transform: `translate(calc(470px + var(--diffuse, 0) * ${70 + item * 12}px), ${190 + item * 28}px)`,
              opacity: "var(--diffuse, 0)",
            }}
          />
        ))}
        <text x="488" y="132" fill={learnColors.ink} fontSize="16">
          NT
        </text>
        {[200, 236, 272].map((y) => (
          <rect key={y} x="548" y={y} width="18" height="22" rx="4" fill={learnColors.channel} opacity="calc(0.35 + var(--bind, 0) * 0.65)" />
        ))}
        <path
          d="M590 188C640 188 660 230 660 250"
          fill="none"
          stroke={learnColors.signal}
          strokeWidth="8"
          strokeLinecap="round"
          opacity="var(--response, 0)"
        />
      </g>
    </svg>
  );
}

export function ElectricalSynapse({ label }: { label: string }) {
  return (
    <svg viewBox="0 0 960 420" className="h-full w-full" role="img" aria-label={label}>
      <rect width="960" height="420" fill="#fbfaf7" />
      <path
        d="M120 150C200 120 340 140 360 220C372 270 320 330 230 320C150 310 90 250 100 200C106 170 90 160 120 150Z"
        fill={learnColors.soma}
        stroke={learnColors.ink}
        strokeWidth="1.6"
      />
      <path
        d="M600 150C690 120 840 150 850 220C858 280 790 330 690 318C600 306 560 250 590 190C600 168 560 160 600 150Z"
        fill={learnColors.membrane}
        stroke={learnColors.ink}
        strokeWidth="1.6"
      />
      {[190, 230, 270].map((y) => (
        <g key={y}>
          <rect x="430" y={y} width="100" height="14" rx="7" fill={learnColors.channel} />
          <circle
            r="7"
            fill={learnColors.potassium}
            style={{
              transform: `translate(calc(430px + var(--current, 0) * 100px), ${y + 7}px)`,
            }}
          />
        </g>
      ))}
      <text x="448" y="160" fill={learnColors.ink} fontSize="16">
        iones
      </text>
      <path
        d="M640 210C690 210 710 250 710 270"
        fill="none"
        stroke={learnColors.signal}
        strokeWidth="8"
        strokeLinecap="round"
        opacity="var(--shared, 0)"
      />
    </svg>
  );
}
