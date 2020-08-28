CREATE TABLE IF NOT EXISTS topics
(id SERIAL PRIMARY KEY,
title TEXT NOT NULL,
user_id INTEGER,
created_on DATE DEFAULT CURRENT_DATE,
created_at TIMESTAMPTZ,
posts_count INTEGER,
board_id INTEGER;