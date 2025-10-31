export default function MegaBlob() {
  return (
    <svg
      viewBox="0 0 1920 1080"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <g opacity="0.15">
        {/* Dark purple ellipse */}
        <g filter="url(#filter0)">
          <ellipse
            cx="256.25"
            cy="142.221"
            rx="256.25"
            ry="142.221"
            transform="matrix(0.938701 -0.344732 -0.344732 -0.938701 405.834 880.997)"
            fill="#18165B"
          />
        </g>

        {/* Cyan circle */}
        <g filter="url(#filter1)">
          <circle
            cx="175.37"
            cy="175.37"
            r="175.37"
            transform="matrix(0.999257 0.0385492 0.0385492 -0.999257 169.062 938.29)"
            fill="#32CDDB"
          />
        </g>

        {/* Dark ellipse */}
        <g filter="url(#filter2)">
          <ellipse
            cx="576.301"
            cy="177.566"
            rx="576.301"
            ry="177.566"
            transform="matrix(0.889529 -0.45688 -0.45688 -0.889529 546.082 797.743)"
            fill="#030216"
          />
        </g>

        {/* Pink blob */}
        <g filter="url(#filter3)">
          <path
            d="M1427 149.206C1368.17 -84.6842 854.257 -181.684 760.028 116.073C665.8 413.83 542.257 429.816 251.757 355.316C-38.7431 280.816 -227.739 381.316 -91.2416 777.316C45.2555 1173.32 253.198 852.94 700.758 680.047C1148.32 507.155 1492.26 408.598 1427 149.206Z"
            fill="#DB64CA"
          />
        </g>

        {/* Blue blob */}
        <g filter="url(#filter4)">
          <path
            d="M1110.35 358.332C1142.36 280.644 1000.48 209.329 832.019 202.831C663.559 196.332 466.052 257.33 497.455 439.83C528.857 622.331 689.301 403.15 811.91 394.74C934.519 386.331 1078.35 436.02 1110.35 358.332Z"
            fill="#4684FF"
          />
        </g>
      </g>

      {/* Bottom polygon */}
      <g opacity="0.15" filter="url(#filter5)">
        <path
          d="M1830.32 1643.33L1906.29 1263.39C1932.11 1134.28 1999.68 1017.24 2098.58 930.331L2389.64 674.561L1830.32 863.794L1271 674.561L1562.05 930.331C1660.96 1017.24 1728.53 1134.28 1754.34 1263.39L1830.32 1643.33Z"
          fill="#A16CFB"
        />
      </g>

      <defs>
        {/* Filters */}
        <filter
          id="filter0"
          x="1.8125"
          y="149.056"
          width="1191.07"
          height="1020.2"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur stdDeviation="175" result="effect1_foregroundBlur" />
        </filter>

        <filter
          id="filter1"
          x="-124.311"
          y="294.439"
          width="950.746"
          height="950.745"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur" />
        </filter>

        <filter
          id="filter2"
          x="208.5"
          y="-180.596"
          width="1538.18"
          height="1114.18"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur stdDeviation="125" result="effect1_foregroundBlur" />
        </filter>

        <filter
          id="filter3"
          x="-486.499"
          y="-419.658"
          width="2271.47"
          height="1736.54"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur stdDeviation="175" result="effect1_foregroundBlur" />
        </filter>

        <filter
          id="filter4"
          x="294.135"
          y="2.36725"
          width="1020.76"
          height="709.835"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur" />
        </filter>

        <filter
          id="filter5"
          x="1071"
          y="474.561"
          width="1518.64"
          height="1368.77"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur" />
        </filter>
      </defs>
    </svg>
  );
}
