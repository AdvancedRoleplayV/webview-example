/* 
    Não alterar este arquivo.

    Este arquivo é o responsável por disponibilizar eventos para o servidor e recebe-los.

    Você pode chamar via cliente ou via servidor o evento:

    TriggerEvent("webView:Emit", "EventExample:Any", param1, param2, ...);
    TriggerServerEvent("webView:Emit", "EventExample:Any", param1, param2, ...);
    
    "webView:Emit" -> Padrão para enviar eventos para a UI
    "EventExample:Any" -> Nome do seu evento, que estará configurado na UI com configureEvent
    Params -> Você pode não passar nenhum param, ou passar a quantidade de params que achar necessário.
*/

local NuiFocus = false;

local function toggleNuiFrame(shouldShow)
    SetNuiFocus(shouldShow, shouldShow)
    NuiFocus = shouldShow;
end

RegisterNetEvent("webView:focusNoCursor")
AddEventHandler("webView:focusNoCursor", function()
    SetNuiFocus(true, false)
end)

RegisterNetEvent("webView:focus")
AddEventHandler("webView:focus", function()
    toggleNuiFrame(true)
end)

RegisterNetEvent("webView:unfocus")
AddEventHandler("webView:unfocus", function()
    toggleNuiFrame(false)
end)

RegisterNetEvent("webView:Emit")
AddEventHandler("webView:Emit", function(webviewEventName, ...)
    SendWebviewMessage(webviewEventName, {...})
end)

RegisterNUICallback('WebviewToServer', function(data, cb)
    -- Emite o evento para o servidor com o nome do evento recebido da WebView
    TriggerServerEvent(data.eventName, table.unpack(data.args));
    -- Chama o callback para retornar uma resposta à WebView
    cb('ok')
end)

RegisterNUICallback('WebviewToClient', function(data, cb)
    -- Emite o evento para o servidor com o nome do evento recebido da WebView
    TriggerEvent(data.eventName, table.unpack(data.args));
    -- Chama o callback para retornar uma resposta à WebView
    cb('ok')
end)

RegisterNUICallback('unfocus', function(data, cb)
    toggleNuiFrame(false)
    cb('ok')
end)

RegisterNUICallback('Webview:CharCreation:OnKeyPress', function(data, cb)
    TriggerEvent("CameraControl:KeyPressed", table.unpack(data))
    cb('ok')
end)
