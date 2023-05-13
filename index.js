const vm = new Vue({
	el: "#app",
	data: {
		noStyle: false,
		styles: {
			textAlign: "center",

			display: "inline-block",
			padding: 10,
			margin: 15,
      		borderRadius:0,
			color: "royalblue",
      		fontSize: 15,
			background: "white",

			borderColor: "royalblue",
			borderWidth: 2,
			borderStyle: "solid",

			width: 150,
			height: 75
		}
	},
	computed: {
		css() {
			return this.noStyle ? "" : `
				text-align: ${this.styles.textAlign};

				display: ${this.styles.display};
				padding: ${this.styles.padding}px;
				margin: ${this.styles.margin}px;

				color: ${this.styles.color};
        		font-size: ${this.styles.fontSize}px;
				background: ${this.styles.background};

				border-color: ${this.styles.borderColor};
				border-width: ${this.styles.borderWidth}px;
				border-style: ${this.styles.borderStyle};

				width: ${this.styles.width}px;
				height: ${this.styles.height}px;
        		border-radius: ${this.styles.borderRadius}px;
			`;
		}
	}
});