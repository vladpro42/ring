import "./raiting.scss"


const Raiting = (
    { raintingValue,
        width,
        height
    }:
        {
            raintingValue: number,
            width?: number,
            height?: number
        }
) => {



    return (
        <div>
            <svg width="0" height="0" viewBox="0 0 32 32">
                <defs>
                    <linearGradient id="half1" x1="0" x2="100%" y1="0" y2="0%">
                        <stop offset="50%" stopColor="#9EAFC2"></stop>
                        <stop offset="50%" stopColor="#fff"></stop>
                    </linearGradient>
                    <symbol viewBox="0 0 45 45" id="star1">
                        <path d="M21.5767 2L26.7171 15.9613H41L29.3502 24.5213L34.5366 39.2196L21.5767 30.0375L8.61746 39.2196L13.8039 24.5213L2.15346 15.9613H16.4363L21.5767 2Z" stroke="#9EAFC2" />
                    </symbol>
                </defs>
            </svg>

            {new Array(5).fill(0).map((_, index) => <svg
                key={index}
                className={(raintingValue >= index + 1) ? "raiting__svg raiting__svg--active" : "raiting__svg raiting__svg--passive"}
                width={width ? width : "45"}
                height={height ? width : "45"}
                viewBox="0 0 32 32"
            >
                <use
                    xlinkHref="#star1"
                    /* fill={raintingValue >= 1 + index ? "url(#half1)" : "white"} */
                    fill={raintingValue >= 1 + index ? "#9EAFC2" : "white"}
                ></use>
            </svg>
            )}

        </div>
    )
}

export default Raiting


import Rating, { RatingProps } from "@mui/material/Rating"

const Rating2 = (props: RatingProps) => {
    return (
        <Rating {...props}></Rating>
    )
}

export { Rating2 }


