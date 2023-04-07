/// <reference types="webmidi" />

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const App: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    if (containerRef.current) {
      // Three.jsのシーンセットアップ
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      containerRef.current.appendChild(renderer.domElement);

      // ここにThree.jsのオブジェクトを追加

      const animate = () => {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
      }

      animate();

      // Web MIDI APIの設定
      navigator.requestMIDIAccess()
        .then((midiAccess: WebMidi.MIDIAccess) => {
          // 入力デバイスの取得
          const inputs = Array.from(midiAccess.inputs.values());

          // 入力デバイスにイベントリスナーを追加
          for (const input of inputs) {
            input.onmidimessage = (message: WebMidi.MIDIMessageEvent) => {
              const command = message.data[0];
              const note = message.data.length > 1 ? message.data[1] : undefined;
              const velocity = message.data.length > 2 ? message.data[2] : undefined;

              // ノートオンイベント
              if (command >= 0x90 && command <= 0x9F) {
                console.log(`Note on: note = ${note}, velocity = ${velocity}`);
              }
              // ノートオフイベント
              else if (command >= 0x80 && command <= 0x8F) {
                console.log(`Note off: note = ${note}, velocity = ${velocity}`);
              }
              // コントロールチェンジイベント
              if (command >= 0xB0 && command <= 0xBF) {
                const controllerNumber = note; // コントロール番号
                const controllerValue = velocity; // コントロール値

                console.log(`Control Change: controllerNumber = ${controllerNumber}, controllerValue = ${controllerValue}`);
              }
              // ピッチベンドイベント
              if (command >= 0xE0 && command <= 0xEF && velocity && note) {
                const pitchBendValue = (velocity << 7) | note; // ピッチベンド値 (14-bit)

                console.log(`Pitch Bend: pitchBendValue = ${pitchBendValue}`);
              }
            };
          }
        })
        .catch(() => {
          console.error('MIDIデバイスにアクセスできませんでした。');
        });
    }
  }, []);

  return <div ref={containerRef} />;
};