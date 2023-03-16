const mediaQurey = maxWidth => `@media (max-width: ${maxWidth}px)`

const size = {
	mobileS: 375,
	mobileM: 568,
	mobildL: 768,
	tablet: 1024,
	desktopS: 1280,
	desktopM: 1440,
	desktopL: 1920,
}

export const {
	mobileS,
	mobileM,
	mobildL,
	tablet,
	desktopS,
	desktopM,
	desktopL,
} = size

export const media = {
	mobileS: mediaQurey(mobileS), // @media (max-width: ${mobileS}px)
	mobileM: mediaQurey(mobileM),
	mobildL: mediaQurey(mobildL),
	tablet: mediaQurey(tablet),
	desktopS: mediaQurey(desktopS),
	desktopM: mediaQurey(desktopM),
	desktopL: mediaQurey(desktopL),
	custom: maxWidth => mediaQurey(maxWidth),
}

// const size = {
// 	mobile: "425px",
// 	tablet: "768px",
// 	desktop: "1440px",
//   };

//   // 미디어 쿼리의 중복 코드를 줄이기위해 정의된 변수입니다
//   const device = {
// 	mobile: `@media only screen and (max-width: ${size.mobile})`,
// 	tablet: `@media only screen and (max-width: ${size.tablet})`,
// 	desktopL: `@media only screen and (max-width: ${size.desktop})`,
//   };
