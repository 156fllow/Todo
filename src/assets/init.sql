CREATE TABLE IF NOT EXISTS list(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    memo TEXT, 
    is_complete NUMBER,
    complete_time TIMESTAMP,
    target_time TIMESTAMP
);
INSERT or IGNORE INTO list(id, memo, is_complete, complete_time, target_time) VALUES (1, 'test1', 0,NULL,NULL);
INSERT or IGNORE INTO list(id, memo, is_complete, complete_time, target_time) VALUES (2, 'test2', 0,NULL,NULL);
INSERT or IGNORE INTO list(id, memo, is_complete, complete_time, target_time) VALUES (1, 'test3', 0,NULL,NULL);
