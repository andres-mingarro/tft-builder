CREATE TABLE `build_augments` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`build_id` integer NOT NULL,
	`name` text NOT NULL,
	`tier` text NOT NULL,
	`description` text,
	`icon` text,
	FOREIGN KEY (`build_id`) REFERENCES `builds`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `build_champion_items` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`build_champion_id` integer NOT NULL,
	`item_name` text NOT NULL,
	`item_image` text NOT NULL,
	`slot` integer NOT NULL,
	FOREIGN KEY (`build_champion_id`) REFERENCES `build_champions`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `build_champions` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`build_id` integer NOT NULL,
	`name` text NOT NULL,
	`cost` integer NOT NULL,
	`role` text NOT NULL,
	`image` text NOT NULL,
	`position` integer DEFAULT 0,
	FOREIGN KEY (`build_id`) REFERENCES `builds`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `build_tips` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`build_id` integer NOT NULL,
	`icon` text,
	`text` text NOT NULL,
	`position` integer DEFAULT 0,
	FOREIGN KEY (`build_id`) REFERENCES `builds`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `build_traits` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`build_id` integer NOT NULL,
	`name` text NOT NULL,
	`count` integer NOT NULL,
	`type` text NOT NULL,
	`highlighted` integer DEFAULT false,
	FOREIGN KEY (`build_id`) REFERENCES `builds`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `builds` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`set` text DEFAULT '16' NOT NULL,
	`description` text,
	`notes` text,
	`is_active` integer DEFAULT true NOT NULL,
	`created_at` text DEFAULT '2026-03-25T19:18:09.655Z' NOT NULL,
	`updated_at` text DEFAULT '2026-03-25T19:18:09.655Z' NOT NULL
);
