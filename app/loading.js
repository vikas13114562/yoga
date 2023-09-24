import style from './component/All.module.css'

export default function Loader() {
  return (<div className={style.loader}>
   <svg
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  style={{ margin: "auto", background: "rgba(241, 242, 243,0)", display: "block",borderRadius:'20px' }}
  width="102px"
  height="102px"
  viewBox="0 0 100 100"
  preserveAspectRatio="xMidYMid"
>
  <g transform="translate(50 42)">
    <g transform="scale(0.8)">
      <g transform="translate(-50 -50)">
        <polygon fill="#c648a4" points="72.5 50 50 11 27.5 50 50 50">
          <animateTransform
            attributeName="transform"
            type="rotate"
            repeatCount="indefinite"
            dur="1s"
            values="0 50 38.5;360 50 38.5"
            keyTimes="0;1"
          />
        </polygon>
        <polygon fill="#c2b134" points="5 89 50 89 27.5 50">
          <animateTransform
            attributeName="transform"
            type="rotate"
            repeatCount="indefinite"
            dur="1s"
            values="0 27.5 77.5;360 27.5 77.5"
            keyTimes="0;1"
          />
        </polygon>
        <polygon fill="#a22217" points="72.5 50 50 89 95 89">
          <animateTransform
            attributeName="transform"
            type="rotate"
            repeatCount="indefinite"
            dur="1s"
            values="0 72.5 77.5;360 72 77.5"
            keyTimes="0;1"
          />
        </polygon>
      </g>
    </g>
  </g>
</svg>

    </div>);
}
