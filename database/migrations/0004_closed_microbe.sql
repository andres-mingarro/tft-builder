CREATE TABLE `build_champion_alt_items` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`build_champion_id` integer NOT NULL,
	`item_name` text NOT NULL,
	`item_image` text NOT NULL,
	`slot` integer NOT NULL,
	FOREIGN KEY (`build_champion_id`) REFERENCES `build_champions`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
ALTER TABLE `builds` ALTER COLUMN "created_at" TO "created_at" text NOT NULL DEFAULT '2026-03-28T03:24:10.054Z';--> statement-breakpoint
ALTER TABLE `builds` ALTER COLUMN "updated_at" TO "updated_at" text NOT NULL DEFAULT '2026-03-28T03:24:10.055Z';