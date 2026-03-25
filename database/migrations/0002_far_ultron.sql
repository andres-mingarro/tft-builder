PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_builds` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`set` text DEFAULT '16' NOT NULL,
	`description` text,
	`notes` text,
	`is_active` integer DEFAULT true NOT NULL,
	`created_at` text DEFAULT '2026-03-25T19:30:14.821Z' NOT NULL,
	`updated_at` text DEFAULT '2026-03-25T19:30:14.822Z' NOT NULL
);
--> statement-breakpoint
INSERT INTO `__new_builds`("id", "name", "set", "description", "notes", "is_active", "created_at", "updated_at") SELECT "id", "name", "set", "description", "notes", "is_active", "created_at", "updated_at" FROM `builds`;--> statement-breakpoint
DROP TABLE `builds`;--> statement-breakpoint
ALTER TABLE `__new_builds` RENAME TO `builds`;--> statement-breakpoint
PRAGMA foreign_keys=ON;--> statement-breakpoint
ALTER TABLE `build_champions` ADD `portrait_variant` text DEFAULT 'default' NOT NULL;--> statement-breakpoint
ALTER TABLE `build_champions` ADD `role_icon` text;--> statement-breakpoint
ALTER TABLE `build_champions` ADD `role_label` text;--> statement-breakpoint
ALTER TABLE `build_champions` ADD `role_style` text;--> statement-breakpoint
ALTER TABLE `build_champions` ADD `priority` integer DEFAULT 3;--> statement-breakpoint
ALTER TABLE `build_champions` ADD `note` text;