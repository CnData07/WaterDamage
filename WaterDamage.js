//LiteLoaderScript Dev Helper
/// <reference path="G:/Minecraft/LXL/JS_Edit/HelperLib-master/src/index.d.ts"/> 


const _VER = '1.0.1'
const TimeInterval = 1000 //监听时间间隔 单位：毫秒 1000ms=1s
const Hurt = 1 // 单位时间伤害
const Particle = false //粒子效果显示 false=显示 true=不显示
const NauseaTime = 10 // 反胃时间 5-10轻度 11-15中度

setInterval(() => {
    mc.getOnlinePlayers().forEach(pl=>{
        if(pl.inWater && !pl.isCreative){
            pl.hurt(Hurt)
            mc.runcmdEx(`effect "${pl.realName}" nausea ${NauseaTime} 1 ${Particle}`)
        }
    });
}, TimeInterval);

colorLog("yellow", "[水伤] 加载完成!");