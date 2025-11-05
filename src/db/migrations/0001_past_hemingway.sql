PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_posts_table` (
	`id` text PRIMARY KEY NOT NULL,
	`slug` text NOT NULL,
	`title` text NOT NULL,
	`content` text NOT NULL,
	`language` text NOT NULL,
	`status` text DEFAULT 'draft' NOT NULL,
	`published_at` integer,
	`edited_at` integer,
	`created_at` integer DEFAULT (unixepoch('now', 'subsec') * 1000) NOT NULL,
	`updated_at` integer DEFAULT (unixepoch('now', 'subsec') * 1000) NOT NULL
);
--> statement-breakpoint
INSERT INTO `__new_posts_table`("id", "slug", "title", "content", "language", "status", "published_at", "edited_at", "created_at", "updated_at") SELECT "id", "slug", "title", "content", "language", "status", "published_at", "edited_at", "created_at", "updated_at" FROM `posts_table`;--> statement-breakpoint
DROP TABLE `posts_table`;--> statement-breakpoint
ALTER TABLE `__new_posts_table` RENAME TO `posts_table`;--> statement-breakpoint
PRAGMA foreign_keys=ON;--> statement-breakpoint
CREATE UNIQUE INDEX `posts_table_slug_unique` ON `posts_table` (`slug`);