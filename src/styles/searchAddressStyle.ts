import styled from "styled-components";
export const SearchAddressStyle = styled.div`
	input,
	button {
		display: block;
		padding: 0.8rem;
		border-radius: 5px;
	}

	.address_input_container {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		margin-bottom: 2rem;

		.address_input_wrapper {
			flex: 1 0 200px;

			& > input {
				width: 100%;
			}
		}

		.address_button_wrapper {
			flex: 1 0 200px;

			& > button {
				margin-left: 40px;
				border-radius: 5px;
				background-color: var(--green);
				color: var(--white);
				border: 0;
				cursor: pointer;
			}
		}
	}

	.address_detail_input_container {
		& > input {
			width: 100%;
			margin-bottom: 1rem;
		}
	}

	.daum_post_container {
		.daum_post_wrapper {
			position: fixed;
			top: 50%;
			left: 50%;
			width: 100%;
			border: 2px solid black;
			border-radius: 10px;
			padding: 1rem;
			max-width: 800px;
			transform: translate(-50%, -50%);
			background-color: var(--light-white);

			.daum_close {
				display: flex;
				justify-content: flex-end;
				align-items: center;
				margin-bottom: 1rem;

				& > button {
					background-color: transparent;
					font-weight: 700;
					margin-top: 0.5rem;
					margin-right: 0.5rem;
					border: 1px solid var(--gray);
					padding: 0.3rem;

					&:hover {
						opacity: 0.5;
					}
				}
			}
		}
	}
`;
