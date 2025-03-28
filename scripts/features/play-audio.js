export function initializePlayActorAudio() {
    // Обработчик для всех типов документов, где могут быть ссылки на аудио
    const handleAudioLinks = (html) => {
        html.on('contextmenu', 'a.content-link', async function (event) {
            // Проверяем, является ли ссылка ссылкой на звук плейлиста
            const dataUuid = this.dataset.uuid;
            if (!dataUuid || !dataUuid.includes('PlaylistSound')) {
                return; // Не обрабатываем, если это не ссылка на звук
            }
            
            event.preventDefault(); // Предотвращаем стандартное контекстное меню
            event.stopPropagation(); // Останавливаем всплытие события
            
            try {
                // Получаем объект звука из UUID
                const sound = await fromUuid(dataUuid);
                if (!sound) return;
                
                // Получаем плейлист, которому принадлежит звук
                const playlist = sound.parent;
                if (!playlist) return;
                
                // Если звук уже воспроизводится, останавливаем его
                if (sound.playing) {
                    await playlist.stopSound(sound);
                    return;
                }
                
                // Останавливаем все плейлисты
                for (const pl of game.playlists.filter(p => p.playing)) {
                    await pl.stopAll();
                }
                
                // Воспроизводим звук через плейлист
                await playlist.playSound(sound);
                
            } catch (error) {
                console.error("Ошибка воспроизведения аудио:", error);
            }
        });
    };
    
    // Применяем обработчик ко всем контекстам, где могут быть ссылки
    Hooks.on('renderChatLog', (app, html) => {
        handleAudioLinks(html);
    });
    
    Hooks.on('renderJournalSheet', (sheet, html) => {
        handleAudioLinks(html);
    });
    
    Hooks.on('renderJournalTextPageSheet', (sheet, html) => {
        handleAudioLinks(html);
    });
}