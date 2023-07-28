use std::fs;
use serde_json;
use crate::LevelData;

const SAVE_PATH: &str = "save.json";

#[tauri::command]
pub fn try_read() -> Result<Vec<LevelData>, String> {
    let data_str = (match fs::read_to_string(SAVE_PATH) {
        Ok(content) => Ok(content),
        Err(err) => {
            if err.kind() == std::io::ErrorKind::NotFound {
                match fs::write(SAVE_PATH, "[]") {
                    Ok(_) => Ok("[]".into()),
                    Err(err) => Err(err),
                }
            } else {
                Err(err)
            }
        },
    }).map_err(|err| err.to_string())?;

    let data: Vec<LevelData> = serde_json::from_str(&data_str).map_err(|err| err.to_string())?;
    Ok(data)
}

#[tauri::command]
pub fn write(data: Vec<LevelData>) -> Result<(), String> {
    fs::write(SAVE_PATH, serde_json::to_string(&data).map_err(|err| err.to_string())?).map_err(|err| err.to_string())
}
