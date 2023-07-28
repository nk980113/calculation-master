use serde::{Deserialize, Serialize};

mod fs_utils;
pub use fs_utils::*;

#[derive(Deserialize, Serialize)]
#[derive(PartialEq)]
pub struct LevelData {
    pub level_id: String,
    pub max_accuracy: String,
    pub max_question_count: String,
}
