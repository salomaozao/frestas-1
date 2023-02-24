import { styled } from "@/styles";
import { Input } from "@mui/material";
import { width } from "@mui/system";
import Image from "next/image";
import containerbeatriz from "../../../assets/people/containerbeatriz.svg";
import containerlouise from "../../../assets/people/containerlouise.svg";
import bg1 from "../../../assets/people/bg1.png";

export const PeoplePage = styled("main", {
	backgroundColor: "$white",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
});

export const Title = styled("span", {
	fontFamily: "Miriam Libre",
	fontStyle: "normal",
	fontWeight: "700",
	fontSize: "48px",
	lineHeight: "41px",
	color: "#E64214;",

	paddingBottom: "1rem",
	border: "0 solid #E64214",
	borderBottomWidth: "4px",

	display: "flex",
	width: "fit-content",

	paddingLeft: "5.75rem",
	marginBottom: "1.15rem",
});

export const TitleP = styled("span", {
	fontFamily: "Miriam Libre",
	fontStyle: "normal",
	fontWeight: "700",
	fontSize: "48px",
	lineHeight: "41px",
	color: "#F0EBE5;",

	paddingBottom: "1rem",
	border: "0 solid #F0EBE5",
	borderBottomWidth: "4px",

	display: "flex",
	width: "fit-content",

	paddingLeft: "5.75rem",
	marginBottom: "1.15rem",
});

export const PersonRow = styled("div", {
	height: "53rem",

	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	position: "relative",
});

export const PersonDesc = styled("div", {
	background: "#5280C0",
	borderRadius: "0px 0px 0px 100px",
	zIndex: "2",
	position: "absolute",

	width: "65vw",
	height: "75%",
	right: "2vw",
	padding: "4rem 5rem 5rem 8rem",

	h1: {
		fontFamily: "Miriam Libre",
		fontStyle: "normal",
		fontWeight: "700",
		fontSize: "52px",
		lineHeight: "68px",

		marginBottom: "1rem",

		color: "#F0EBE5",
	},

	span: {
		fontFamily: "HK Grotesk",
		fontStyle: "normal",
		fontWeight: "500",
		fontSize: "21px",
		lineHeight: "35px",
		/* or 167% */

		color: "#F0EBE5",
	},
});
export const PersonDescReverse = styled("div", {
	background: "#5280C0",
	borderRadius: "0px 0px 100px 0px ",
	zIndex: "2",
	position: "absolute",

	width: "65vw",
	height: "75%",
	left: "2vw",
	padding: "4rem 5rem 5rem 8rem",

	h1: {
		fontFamily: "Miriam Libre",
		fontStyle: "normal",
		fontWeight: "700",
		fontSize: "52px",
		lineHeight: "68px",

		marginBottom: "1rem",

		color: "#F0EBE5",
	},
});

export const PersonImage = styled(Image, {
	height: "100%",
	width: "40vw",
	objectFit: "cover",
});

export const SubtitleRow = styled("div", {
	display: "flex",
	marginBottom: ".7rem",

	p: {
		fontFamily: "Miriam Libre",
		color: "#F0EBE5",
		fontWeight: "700",
		fontSize: "24px",
		paddingRight: "0.8rem",
	},

	span: {
		fontFamily: "Miriam Libre",
		color: "#F0EBE5",
		fontWeight: "400",
		fontSize: "20px",
		paddingLeft: "0.8rem",
		borderLeft: "3px solid #F0EBE5",
	},
});

export const PersonRowReverse = styled("div", {
	height: "53rem",

	display: "flex",
	flexDirection: "row-reverse",
	alignItems: "center",
	position: "relative",
});

export const ProfArea = styled("div", {
	background: "#5280C0",
	marginTop: "8rem",
});

export const ProfDesc = styled("div", {
	width: "80vw",
	display: "flex",
	justifyContent: "center",
	margin: "0 auto",
	flexDirection: "column",

	section: {
		width: "80vw",
		borderBottom: "4px solid white",
		padding: "1.25rem 0",
		display: "flex",
		justifyContent: "space-between",
		alignContent: "center",
	},

	h1: {
		fontFamily: "Miriam Libre",
		fontStyle: " normal",
		fontWeight: " 700",
		fontSize: " 40px",
		lineHeight: " 68px",

		color: "#F0EBE5",
	},
});

export const SearchInput = styled("div", {
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	border: "1.5px solid #F0EBE5",
	borderRadius: "23px",
	height: "2.2rem",
	width: "12rem",
	padding: "1rem 1rem",
	Input: {
		background: "inherit",
		border: 0,
		outline: 0,
		height: "3rem",
		textAlign: "left",
		paddingBottom: "0.15rem",

		"&:before": {
			border: 0,
		},
		"&:after": {
			border: 0,
		},
	},
});

export const ProfSmall = styled("div", {
	marginBottom: "2.5rem",

	h3: {
		fontFamily: "Miriam Libre",
		fontStyle: " normal",
		fontWeight: " 700",
		fontSize: " 24px",
		lineHeight: " 37px",
		marginBottom: "0.15rem",

		color: "#F0EBE5",
	},
	span: {
		fontFamily: "Miriam Libre",
		fontStyle: " normal",
		fontWeight: " 400",
		fontSize: " 21px",
		lineHeight: " 32px",

		color: "#F0EBE5",
	},
});

export const TextScroll = styled("p", {
	overflowY: "scroll",
	fontFamily: "HK Grotesk",
	fontStyle: "normal",
	fontWeight: "500",
	fontSize: "21px",
	lineHeight: "35px",
	/* or 167% */

	color: "#F0EBE5",
});

export const TextScrollReverse = styled("p", {
	overflowY: "scroll",
	fontFamily: "HK Grotesk",
	fontStyle: "normal",
	fontWeight: "500",
	fontSize: "21px",
	lineHeight: "35px",
	/* or 167% */

	color: "#F0EBE5",
});

export const ProfRow = styled("div", {
	display: "flex",
	flexDirection: "row",
});

export const CarouselController = styled("div", {
	display: "flex",
	flexDirection: "row",
	justifyContent: "space-between",
	alignItems: "center",
	margin: "3rem auto",
	width: "25%",
});

export const CarouselImage = styled(Image, {
	variants: {
		reverse: {
			true: { transform: "rotate(180deg)" },
		},
	},
});

export const CarDot = styled("div", {
	width: "1vw",
	height: "1vw",
	borderRadius: "100%",
	border: "2px solid white",

	variants: {
		active: {
			true: { background: "#f1f1f1" },
		},
	},
});

export const PersonGrid = styled("div", {
	width: "80%",
	margin: "5rem auto 0",
	gridTemplateColumns: "repeat(5, 1fr)",
	gridTemplateRows: "repeat(5, 1fr)",
	gridColumnGap: "0px",
	gridRowGap: "0px",
	paddingBottom: "3rem",
});

export const GridImage = styled(Image, {
	objectFit: "cover",
	width: "25%",
	margin: 0,
	padding: 0,
});

export const ColabArea = styled("div", {
	paddingTop: "5rem",
	background: "#5C2366",
	"& > div": {
		display: "flex",
		flexDirection: "row",
		width: "85%",
		margin: "4rem auto",

		h1: {
			fontFamily: "Miriam Libre",
			fontStyle: " normal",
			fontWeight: " 700",
			fontSize: " 40px",
			lineHeight: " 68px",

			color: "#F0EBE5",
		},

		p: {
			fontFamily: "HK Grotesk",
			fontStyle: "normal",
			fontWeight: "500",
			fontSize: "21px",
			lineHeight: "35px",
			color: "#F0EBE5",
		},
	},
});
export const ColabGrid = styled("div", {
	width: "60%",
	height: "60%",
	margin: "5rem auto 0",
	gridTemplateColumns: "repeat(5, 1fr)",
	gridTemplateRows: "repeat(5, 1fr)",
	gridColumnGap: "0px",
	gridRowGap: "0px",
	marginTop: "-1rem",
});

export const ColabGridImage = styled(Image, {
	objectFit: "cover",
	width: "33%",
	margin: 0,
	padding: 0,
});
