// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use app::*;

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![try_read, write])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
