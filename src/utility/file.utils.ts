import fs from "fs-extra";

export class FileUtils {
  async createFolder(path: string) {
    try {
      await fs.mkdir(path);
      return { status: "success", path: path };
    } catch (err) {
      return { status: "failed", error: err };
    }
  }

  async deleteFolder(path: string) {
    try {
      await fs.remove(path);
      return { status: "success", path: path };
    } catch (err) {
      return { status: "failed", error: err };
    }
  }

  async renameFolder(oldPath: string, newPath: string) {
    try {
      await fs.move(oldPath, newPath);
      return { status: "success", newPath: newPath, oldPath: oldPath };
    } catch (err) {
      return { status: "failed", error: err };
    }
  }

  async createFile(path: string, content: string) {
    try {
      await fs.outputFile(path, content);
      return { status: "success", content, path: path };
    } catch (err) {
      return { status: "failed", error: err };
    }
  }

  async editFile(path: string, content: string) {
    try {
      await fs.writeFile(path, content);
      return { status: "success",content, path: path };
    } catch (err) {
      return { status: "failed", error: err };
    }
  }

  async renameFile(oldPath: string, newPath: string, content?: string) {
    try {
      await fs.move(oldPath, newPath);
      if (content) {
        await fs.writeFile(newPath, content);
        return { status: "success",content, newPath: newPath, oldPath: oldPath };
      }
      else{
        return { status: "success", newPath: newPath, oldPath: oldPath };
      }
    } catch (err) {
      return { status: "failed", error: err };
    }
  }

  async deleteFile(path: string) {
    try {
      await fs.remove(path);
      return { status: "success", path: path };
    } catch (err) {
      return { status: "failed", error: err };
    }
  }
}
