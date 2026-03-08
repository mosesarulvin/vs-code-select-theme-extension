# Change Log

All notable changes to the "select-theme" extension will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2024-03-08

### Added

- Auto-detect color scheme toggle button in editor toolbar.
- Clickable status bar item to open theme picker.
- Visual feedback notifications when auto-detect is toggled.

### Changed

- Improved theme change detection to listen specifically for `workbench.colorTheme` changes.
- Status bar now shows current theme immediately on activation.
- Extension activation changed from `*` to `onStartupFinished` for better performance.

### Fixed

- Fixed `event.affectsConfiguration` bug - now properly called as a function with parameter.
- Auto-detect color scheme is now properly disabled when manually toggling themes.

## [1.1.0] - 2024-03-08

### Added

- Status bar indicator displaying current theme name in real-time.
- Light/Dark mode toggle button to switch between Default Light+ and Default Dark+ themes.
- Configuration change listener for automatic status bar updates.
- Smart handling of `window.autoDetectColorScheme` setting.

### Changed

- Enhanced toolbar with dedicated Light/Dark toggle button.
- Improved error handling with user-friendly error messages.

## [1.0.0] - 2024-03-01

### Added

- Initial release of Select Theme extension.
- Quick theme selection command to open VS Code's native theme picker.
- Editor toolbar button with color palette icon for easy access.
- Command palette integration with "Select Theme" command.

[unreleased]: https://github.com/mosesarulvin/vs-code-select-theme-extension/compare/v1.1.0...HEAD
[1.1.0]: https://github.com/mosesarulvin/vs-code-select-theme-extension/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/mosesarulvin/vs-code-select-theme-extension/releases/tag/v1.0.0