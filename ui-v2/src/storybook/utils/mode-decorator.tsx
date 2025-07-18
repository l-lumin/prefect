import type { ReactRenderer } from "@storybook/react";
import { useEffect, useState } from "react";
import type { DecoratorFunction } from "storybook/internal/types";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export const ModeDecorator: DecoratorFunction<ReactRenderer> = (Story) => {
	const [isDarkMode, setIsDarkMode] = useState(false);
	const toggleMode = () => {
		setIsDarkMode((curr) => !curr);
	};

	// sync external css  with state
	useEffect(() => {
		document.documentElement.classList.toggle("dark", isDarkMode);
	}, [isDarkMode]);

	return (
		<>
			<div className="fixed bottom-4 left-4 z-50">
				<div className="flex items-center space-x-2">
					<Switch id="theme-mode" checked={isDarkMode} onClick={toggleMode} />
					<Label htmlFor="theme-mode">
						{isDarkMode ? "Light Mode" : "Dark Mode (experimental)"}
					</Label>
				</div>
			</div>
			<Story />
		</>
	);
};
