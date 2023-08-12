use std::fs;
use std::path::PathBuf;
use std::str::FromStr;
use serde_json;
use directories::ProjectDirs;
use crate::LevelData;

fn get_save_path() -> Result<String, String> {
    save_path().ok_or("Error while getting save file path".into())
}

fn save_path() -> Option<String> {
    let mut path_buf = ProjectDirs::from("com", "eggeggegg", "calculationMaster")?.config_local_dir().to_path_buf();
    path_buf.push("save.json");
    Some(path_buf.to_str()?.into())
}

#[tauri::command]
pub fn try_read() -> Result<Vec<LevelData>, String> {
    let save_path = get_save_path()?;
    let data_str = (match fs::read_to_string(save_path.clone()) {
        Ok(content) => Ok(content),
        Err(err) => {
            if err.kind() == std::io::ErrorKind::NotFound {
                fs::create_dir_all(PathBuf::from_str(&save_path).map_err(|err| err.to_string())?.parent().ok_or("Error while getting save file path".to_owned())?).map_err(|err| err.to_string())?;
                match fs::write(get_save_path()?, "[]") {
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
    fs::write(get_save_path()?, serde_json::to_string(&data).map_err(|err| err.to_string())?).map_err(|err| err.to_string())
}
