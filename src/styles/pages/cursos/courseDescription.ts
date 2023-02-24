import { styled } from "@/styles";
import Link from "next/link";

export const CourseDescriptionContainer = styled("main", {
	display: "flex",
	flexDirection: "column",
	gap: "2.5rem",
});
export const TopContainerOfDescription = styled("section", {
	display: "flex",
	variants: {
		page: {
			actually: {},
			paste: {
				p: {
					fontFamily: "HK Grotesk",
					fontSize: "$21pix",
					color: "$white",
					fontWeight: 500,
					lineHeight: 2,
				},
				gap: "2rem",
			},
		},
	},
});
export const DescriptionImageContainer = styled("div", {
	width: "70%",
});
export const PriceAndSubscriptionButtonContainer = styled("div", {
	display: "flex",
	flexDirection: "column",
	width: "40%",
	alignItems: "end",
	gap: "3rem",

	p: {
		fontFamily: "HK Grotesk",
		fontSize: "$14pix",
		color: "$gray",
		fontWeight: 300,
	},
});
export const GoToSubscriptionLink = styled(Link, {
	backgroundColor: "$purple",
	padding: ".5rem .3rem",
	width: "60%",
	borderRadius: "12px",
	border: "none",
	overflow: "hidden",
	cursor: "pointer",
	textDecoration: "none",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	textAlign: "center",

	span: {
		fontFamily: "Miriam Libre",
		fontWeight: "bold",
		fontSize: "$18pix",
		color: "$white",
	},
});
export const ValueOfCourse = styled("div", {
	display: "flex",
	flexDirection: "column",
	alignItems: "end",
	gap: "1.5rem",

	h6: {
		fontFamily: "Miriam Libre",
		fontWeight: "bold",
		color: "$purple",
		fontSize: "$24pix",
	},
	span: {
		fontFamily: "Miriam Libre",
		fontWeight: "bold",
		color: "$black",
		fontSize: "$24pix",
	},
});
export const DescriptionOfCourse = styled("article", {
	p: {
		fontFamily: "HK Grotesk",
		fontSize: "$21pix",
		color: "$black",
		fontWeight: 500,
		lineHeight: 2,
	},
});
